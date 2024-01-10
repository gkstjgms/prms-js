import { initStore } from "./store.js";
import { initHistoryList } from "./components/history-list.js";
import { initCurrentAsset } from "./components/current-asset.js";
import { initAddItem } from "./components/add-item.js";

init();

function init() {
    // Store 객체 초기화 함수
    initStore();

    // 현재 자산 입력
    initCurrentAsset();
    initAddItem();
    initHistoryList();
}
