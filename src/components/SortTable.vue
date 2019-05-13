<template>
    <div class="sorted-table">
        <div class="header" :style="headerStyle" v-mouseover="onHeaderMouseOver" v-mouseleave="onHeaderMouseLeave">
            <div v-for="(item,key,index) in header" class="header-item" :key="key"
                 :style="index<Object.keys(header).length-1?{'border-right':'1px #555 solid'}:{}">
                <div class="header-content">
                    {{item}}
                    <div class="header-sort" v-if="Object.keys(sortedIndex).includes(key)" @click="onSortClick(index)">
                        ↑↓
                    </div>
                    <div style="display: inline-block;width:16px" v-else>
                    </div>

                </div>

            </div>
        </div>
        <div class="items">
            <div v-for="(item,index) in myItem" :key="index"
                 :class="{
           'odd-row':oddRow[index],
           'even-row':evenRow[index],
           'last-row':lastRow[index],
           'not-last-row':notLastRow[index],
           'row-default':true
           }"
                 :style="{'height':rowHeight+'px',transition:customTransition,position:'relative',top:top[index]+'px'}">
                <div v-for="(v,k,i) in item" :key="k"
                     :style="{flex: 1,display:'flex','align-items':'center','justify-content':'center',height:'100%',
             'word-wrap':'break-word','overflow':'hidden'}"
                     :class="i<Object.keys(header).length-1?'not-last-column':''">
                    {{v}}
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import _ from 'lodash'
    export default {
        props: {
            'header-mouseover-color': {
                type: String,
                default:''
            },
            'len': {
                type: Number,
                required: true
            },
            'items': {
                type: Array,
                required: true
            },
            'header': {
                type: Object,
                required: true
            },
            'sortedIndex': {
                type: Object,
                required: true,
            },
            'rowHeight': {
                type: Number,
                default: 50,
            },
            'transitionTime': {
                type: Number,
                default: 0.3,
            }
        },
        name: "SortTable",
        data () {
            return {
                top: [],
                oddRow: [],
                evenRow: [],
                lastRow: [],
                notLastRow: [],
                tran: '',
                customTransition: '',
                myItem: null,
                canSort: true,
                headerStyle: {
                }


            }
        },
        directives: {
            mouseover: {
                bind: function (el, binding) {
                    function handleMouseOver() {
                        if (binding.expression) {
                            binding.value()
                        }
                    }

                    el.addEventListener('mouseover', handleMouseOver);
                    el.__vueHandleMouseOver__ = handleMouseOver;
                },
                unbind: function (el) {
                    if (el.hasOwnProperty('__vueHandleMouseOver__')) {
                        el.removeEventListener('mouseover', el.__vueHandleMouseOver__);
                        delete el.__vueHandleMouseOver__;
                    }

                }
            },
            mouseleave: {
                bind: function (el, binding) {
                    function handleMouseLeave() {
                        if (binding.expression) {
                            binding.value()
                        }
                    }

                    el.addEventListener('mouseleave', handleMouseLeave);
                    el.__vueHandleMouseLeave = handleMouseLeave;
                },
                unbind: function (el) {
                    if (el.hasOwnProperty('__vueHandleMouseLeave')) {
                        el.removeEventListener('mouseleave', el.__vueHandleMouseLeave);
                        delete el.__vueHandleMouseLeave;
                    }

                }
            }
        },
        created() {
            this.tran = `all ${this.transitionTime}s`;
            this.customTransition = this.tran;
            this.myItem = this.items;
            this.top = this.genArr(this.len, 0);
            this.oddRow = this.initOddRow(this.len);
            this.evenRow = this.initEvenRow(this.len);
            this.lastRow = this.initLastRow(this.len);
            this.notLastRow = this.initNotLastRow(this.len);
            this.headerStyle={
                'height': this.rowHeight + 'px',
                'transition':`${this.transitionTime}s`
            }
        },
        methods: {
            onHeaderMouseOver:function() {
                this.$set(this.headerStyle,'background-color',this.headerMouseoverColor);
            },
            onHeaderMouseLeave:function(){
             if(this.headerStyle.hasOwnProperty('background-color')){
                 this.$delete(this.headerStyle,'background-color');
             }
            },
            genArr: function (len, v) {
                const ret = Array(len);
                for (let i = 0; i < len; i++) {
                    ret[i] = v;
                }
                return ret;
            },

            initOddRow: function (len) {
                const ret = [];
                for (let i = 0; i < len; i++) {
                    if (i % 2 === 0) ret.push(false);
                    else ret.push(true);
                }
                return ret;
            },

            initEvenRow: function (len) {
                const ret = [];
                for (let i = 0; i < len; i++) {
                    if (i % 2 !== 0) ret.push(false);
                    else ret.push(true);
                }
                return ret;

            },

            initLastRow: function u(len) {
                const ret = [];
                for (let i = 0; i < len; i++) {
                    if (i !== len - 1) ret.push(false);
                    else ret.push(true);
                }
                return ret;

            },

            initNotLastRow: function (len) {

                const ret = [];
                for (let i = 0; i < len; i++) {
                    if (i === len - 1) ret.push(false);
                    else ret.push(true);
                }
                return ret;
            },
            uuid: function () {
                const s = [];
                const hexDigits = "0123456789abcdef";
                for (let i = 0; i < 36; i++) {
                    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                }
                s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
                s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
                s[8] = s[13] = s[18] = s[23] = "-";

                return s.join("");
            },
            onSortClick: function (index) {
                this.$loading.show("Please wait");
                if (this.canSort) {
                    this.canSort = false;
                    const keyName = Object.keys(this.header)[index];
                    this.sortedIndex[keyName] = !this.sortedIndex[keyName];
                    const itemsTemp = _.cloneDeep(this.myItem);
                    const t = [];
                    itemsTemp.forEach((item) => {
                        const uuid1 = this.uuid();
                        t.push(uuid1);
                        item['uuidkey'] = uuid1;
                    });
                    itemsTemp.sort((a, b) => ((a[keyName] - b[keyName]) * (this.sortedIndex[keyName] ? 1 : -1)));
                    const moved = [];
                    for (let i = 0; i < t.length; i++) {
                        for (let j = 0; j < itemsTemp.length; j++) {
                            if (itemsTemp[j]['uuidkey'] === t[i]) {
                                moved.push(j);
                                break;
                            }
                        }
                    }
                    for (let i = 0; i < moved.length; i++) {
                        this.$set(this.top, i, -this.rowHeight * (i - moved[i]));
                        if (moved[i] % 2 === 0) {
                            this.$set(this.evenRow, i, true);
                            this.$set(this.oddRow, i, false);
                        } else {
                            this.$set(this.evenRow, i, false);
                            this.$set(this.oddRow, i, true);
                        }
                        if (moved[i] === moved.length - 1) {
                            this.$set(this.notLastRow, i, false);
                            this.$set(this.lastRow, i, true);
                        } else {
                            this.$set(this.lastRow, i, false);
                            this.$set(this.notLastRow, i, true);
                        }
                    }
                    window.setTimeout(() => {
                        this.customTransition = '';
                        this.top = this.genArr(this.len, 0);
                        this.evenRow = this.initEvenRow(this.len);
                        this.oddRow = this.initOddRow(this.len);
                        this.notLastRow = this.initNotLastRow(this.len);
                        this.lastRow = this.initLastRow(this.len);
                        for (let i = 0; i < itemsTemp.length; i++) {
                            delete itemsTemp[i]['uuidkey'];
                        }
                        this.myItem = itemsTemp;

                        window.setTimeout(() => {
                            this.customTransition = this.tran;
                            this.canSort = true;
                            this.$loading.hide();
                        }, 50);
                    }, this.transitionTime * 1000)
                }
            }
        }
    }
</script>

<style scoped>
    .sorted-table {
        border: 1px lightgray solid;
    }

    .header {
        background-color: gray;
        color: white;
        display: flex;
        justify-content: space-evenly;
    }

    .header-item {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        padding: 10px;

    }

    .header-content {
        justify-self: center;
        font-weight: bold;
        text-align: center;
        margin-left: 16px;
    }

    .header-sort {
        display: inline-block;
        position: relative;
        font-weight: bold;
        text-align: left;
        user-select: none;
        cursor: pointer;
    }

    .odd-row {
        background-color: lightgray;
    }

    .even-row {
        background-color: white;
    }

    .last-row {
        border: 1px darkgray solid;
    }

    .not-last-row {
        border-left: 1px darkgray solid;
        border-top: 1px darkgray solid;
        border-right: 1px darkgray solid;
    }

    .row-default {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;

    }

    .not-last-column {
        border-right: 1px solid darkgray;
    }
</style>
