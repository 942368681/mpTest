<template>
    <div class="container">
        <div class="tool-bar">
            <div class="input-type" @click="changeInpsType">
                <icon
                    :class="inputType === 'fountain-pen' ? 'iconfont iconpan_icon active' : 'iconfont iconpan_icon'"
                    data-type="fountain-pen"
                ></icon>
                <icon
                    :class="inputType === 'rubber' ? 'iconfont iconcachu active' : 'iconfont iconcachu'"
                    data-type="rubber"
                ></icon>
                <!-- <switch :checked="switchChecked" @change="switchChange"/> -->
                <button type="primary" class="save-btn" @click="getData">save</button>
                <button type="primary" class="reload-btn" @click="reload">reload</button>
            </div>
            <scroll-view scroll-x="true" scroll-left="0" class="color-list">
                <div
                    v-for="(item, index) in colorList"
                    :key="item"
                    :data-index="index"
                    :class="currColorIndex === index ? 'active': ''"
                    @click="colorChange"
                    class="color-item"
                >
                    <div :style="{'background-color': item}"></div>
                </div>
            </scroll-view>
            <div class="rubber-range">
                <slider
                    :value="lineWidth"
                    min="1"
                    max="10"
                    @change="lineWidthChange"
                    show-value
                    block-size="20"
                />
            </div>
        </div>
        <div class="board">
            <board :init-data="boardData" class="board-comp" />
        </div>
    </div>
</template>

<script>
const boardData = require('../../mock/boardData');
const boardData2 = require('../../mock/boardData2');

export default {
    data() {
        return {
            boardData: {},
            // 输入类型 fountain-pen： 钢笔， rubber： 橡皮
            inputType: 'fountain-pen',
            // 颜色列表
            colorList: [
                '#000000',
                '#362c23',
                '#715e4f',
                '#643d5c',
                '#677e3a',
                '#953c38',
                '#314d59',
                '#a7b47f',
                '#c58d8e',
                '#658e9f',
                '#229daf',
                '#7d790e',
                '#ebd669',
                '#2a1706',
                '#623919',
                '#ba8559',
                '#a33a65',
                '#fcac7b',
                '#fbe8c5',
                '#414141',
                '#828282',
                '#aaaaaa',
                '#dbdbdb',
                '#f7f7f7',
                '#ffcc59',
                '#cbcc57',
                '#e2513c',
                '#69b4d3',
                '#c72267',
                '#8dae21',
                '#1a386a',
                '#1f76bb',
                '#2fb7f5',
                '#a070bc',
                '#fb9e3f',
                '#ffd778'
            ],
            // 当前颜色
            currColorIndex: 0,
            // 当前粗细
            lineWidth: 6,
            // 橡皮范围
            rubberRange: 20,
            // 多媒体可操控开关
            switchChecked: false
        };
    },

    components: {},
    created() {
        const {
            inputType,
            colorList,
            currColorIndex,
            lineWidth,
            rubberRange
        } = this;

        const settings = {
            inputType,
            lineWidth,
            strokeStyle: colorList[currColorIndex]
        };
        const initData = {
            canvasSettings: settings,
            zIndexInfo: boardData,
            rubberRange
        };

        this.boardData = initData;
    },
    methods: {
        switchChange: function (ev) {
            const compInstance = this.$mp.page.selectComponent('.board-comp');
            if (ev.mp.detail.value) {
                compInstance.changeHandleComps(true);
            } else {
                compInstance.changeHandleComps(false);
            }
        },
        changeInpsType: function(ev) {
            const inputType = ev.target.dataset.type;
            const { inputType: prevInpsType } = this;

            if (!inputType || inputType === prevInpsType) return;

            this.inputType = inputType;
            const compInstance = this.$mp.page.selectComponent('.board-comp');
            this.setUpBoard(compInstance, {
                inputType
            });
        },
        colorChange: function(ev) {
            const index = ev.currentTarget.dataset.index;
            const { currColorIndex, colorList } = this;

            if (currColorIndex === index) return;

            this.currColorIndex = index;
            const compInstance = this.$mp.page.selectComponent('.board-comp');
            this.setUpBoard(compInstance, {
                strokeStyle: colorList[index]
            });
        },
        lineWidthChange: function(ev) {
            const value = ev.mp.detail.value;

            this.lineWidth = value;
            const compInstance = this.$mp.page.selectComponent('.board-comp');
            this.setUpBoard(compInstance, {
                lineWidth: value
            });
        },
        // 白板设置（输入类型，颜色，粗细...）
        setUpBoard: function(instance, settings) {
            instance.setSettings({
                ...settings
            });
        },
        // 获取白板数据
        getData: function () {
            const compInstance = this.$mp.page.selectComponent('.board-comp');
            const data = compInstance.getBoardData();
            console.log(data);
        },
        // 重置数据
        reload: function () {
            const {
                inputType,
                colorList,
                currColorIndex,
                lineWidth,
                rubberRange
            } = this;

            const settings = {
                inputType,
                lineWidth,
                strokeStyle: colorList[currColorIndex]
            };
            const initData = {
                canvasSettings: settings,
                zIndexInfo: boardData2,
                rubberRange
            };

            this.boardData = initData;
        }
    }
};
</script>

<style scoped>
.container {
}
.tool-bar {
    width: 80%;
    margin: 0 auto 40rpx;
}
.input-type {
    display: flex;
    align-items: center;
    height: 60rpx;
    margin-bottom: 28rpx;
}
.input-type icon {
    display: flex;
    height: 60rpx;
    align-items: center;
    justify-content: center;
    width: 100rpx;
    font-size: 40rpx;
    border-radius: 10rpx;
    margin-right: 20rpx;
}
.input-type icon.active {
    background: #ededed;
}
.input-type .save-btn, .input-type .reload-btn {
    display: flex;
    height: 60rpx;
    align-items: center;
    justify-content: center;
    width: 100rpx;
    font-size: 28rpx;
    border-radius: 10rpx;
    margin: 0 20rpx 0 0;
    padding: 0;
}

.color-list {
    height: 50rpx;
    overflow: hidden;
    white-space: nowrap;
    vertical-align: middle;
    margin-bottom: 20rpx;
}
.color-list .color-item {
    width: 50rpx;
    height: 50rpx;
    border-radius: 50%;
    display: inline-block;
    margin-right: 20rpx;
    box-sizing: border-box;
}
.color-list .color-item view {
    width: 42rpx;
    height: 42rpx;
    border-radius: 50%;
    margin: 2rpx auto 0;
}
.color-list .color-item.active {
    border: 1rpx solid #21c221;
}
.rubber-range slider {
    margin: 0;
}
.board {
    margin: auto;
    width: 80%;
    height: 900rpx;
    border: 1px solid #333;
}
</style>
