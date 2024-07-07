// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabItemDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li>
      <button
        type="button"
        className={`tab-button ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
      <hr className="line" />
    </li>
  )
}
export default TabItem
