import ButtonSection from './ButtonSection'
import InputSection from './InputSection'
import NavigationSection from './NavigationSection'
import DropdownSection from './DropdownSection'
import CheckboxSection from './CheckboxSection'
import RadioSection from './RadioSection'
import SliderSection from './SliderSection'
import ModalSection from './ModalSection'
import CardSection from './CardSection'
import DragDropSection from './DragDropSection'
import ScrollSection from './ScrollSection'
import AnimationSection from './AnimationSection'
import MenuSection from './MenuSection'
import SidebarSection from './SidebarSection'
import HoverSection from './HoverSection'
import SwipeSection from './SwipeSection'
import FlexNavigationSection from './FlexNavigationSection'

/**
 * 섹션 레지스트리: 배열 순서대로 화면에 렌더링됩니다.
 * 새 섹션 추가 방법:
 *   1) src/components/sections/XxxSection.jsx 생성
 *   2) 위에 import 추가
 *   3) 아래 배열에 { id, Component } 추가
 */
const sections = [
  { id: 'button', Component: ButtonSection },
  { id: 'input', Component: InputSection },
  { id: 'navigation', Component: NavigationSection },
  { id: 'dropdown', Component: DropdownSection },
  { id: 'checkbox', Component: CheckboxSection },
  { id: 'radio', Component: RadioSection },
  { id: 'slider', Component: SliderSection },
  { id: 'modal', Component: ModalSection },
  { id: 'card', Component: CardSection },
  { id: 'drag-drop', Component: DragDropSection },
  { id: 'scroll', Component: ScrollSection },
  { id: 'animation', Component: AnimationSection },
  { id: 'menu', Component: MenuSection },
  { id: 'sidebar', Component: SidebarSection },
  { id: 'hover', Component: HoverSection },
  { id: 'swipe', Component: SwipeSection },
  { id: 'flex-navigation', Component: FlexNavigationSection },
  // ... 16개 UI 요소를 순차적으로 추가
]

export default sections
