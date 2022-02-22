import React, { useState } from 'react'

const contents = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1"
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2"
    }
]

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    if (!allTabs || Array.isArray(allTabs)) {  //allTabs가 true가 아니거나, 배열이 아닐때
        return;
    }
    
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    }
}

const UseTabsHook = () => {
    // const tabs = useTabs(0, contents)
    const { currentItem, changeItem } = useTabs(0, contents)
  return (
      <>
          {contents.map((section, index) => <button onClick={() => changeItem(index)}>{section.tab}</button>)}
          <div>{ currentItem.content}</div>
   </>
  )
}

export default UseTabsHook