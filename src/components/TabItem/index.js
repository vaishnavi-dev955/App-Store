// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, OnClickTabGetCorrespondingAppps, isactive} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    OnClickTabGetCorrespondingAppps(tabId)
  }

  const isActiveClass = isactive ? 'activeClass' : ''

  return (
    <li>
      <button
        className={`button1 ${isActiveClass}`}
        type="button"
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
