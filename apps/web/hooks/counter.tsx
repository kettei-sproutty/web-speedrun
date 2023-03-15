import { createContext, type FC, useReducer } from 'react'
import { ChildrenProps } from '../typings/react'

export enum ActionTypeEnum {
  CHANGE_BACKGROUND = 'CHANGE_BACKGROUND',
  CHANGE_COLOR = 'CHANGE_COLOR',
  CHANGE_POSITION = 'CHANGE_POSITION',
}

type ActionTypeBackgroundColor = {
  type: ActionTypeEnum.CHANGE_BACKGROUND | ActionTypeEnum.CHANGE_COLOR
  payload: string
}
type ActionTypePosition = {
  type: ActionTypeEnum.CHANGE_POSITION
  payload: Position
}

export type ActionType = ActionTypeBackgroundColor | ActionTypePosition

type Position = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'

type CounterContextState = {
  background: string
  color: string
  position: Position
}

type CounterContextType = {
  state: CounterContextState
  dispatch: (action: ActionType) => void
}

const reducer = (state: CounterContextState, action: ActionType) => {
  switch (action.type) {
    case ActionTypeEnum.CHANGE_BACKGROUND: {
      sessionStorage.setItem('counter.background', action.payload)
      return { ...state, background: action.payload }
    }
    case ActionTypeEnum.CHANGE_COLOR: {
      sessionStorage.setItem('counter.color', action.payload)
    }
    case ActionTypeEnum.CHANGE_POSITION: {
      sessionStorage.setItem('counter.position', action.payload)
    }
    default:
      return state
  }
}

const initialCounterState: CounterContextState = {
  background: 'white',
  color: 'black',
  position: 'top-right',
}

const CounterContext = createContext<CounterContextType>({
  state: initialCounterState,
  dispatch: () => null,
})

const CounterProvider: FC<ChildrenProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialCounterState)
  return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
}

export default CounterProvider
