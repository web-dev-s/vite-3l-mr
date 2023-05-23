import React from 'react'
import sinon, { SinonStub } from 'sinon'

export const noop = () => null

export const flushPromises = (): Promise<any> =>
  new Promise((resolve) => setImmediate(resolve))

type DependencyList = ReadonlyArray<any>
export type UseEffectResponse = {
  cleanUp: Function
  dependencies: DependencyList
  useEffectMock: SinonStub
}

export function mockUseState(): SinonStub {
  return sinon
    .stub<any, any>(React, 'useState')
    .callsFake((init: any) => [init, noop])
}

export function mockUseRef(): SinonStub {
  return sinon.stub(React, 'useRef')
}

export function mockUseCallback(): SinonStub {
  return sinon.stub(React, 'useCallback').callsFake((func) => func())
}

export function mockUseMemo(): SinonStub {
  return sinon.stub(React, 'useMemo').callsFake((func) => func())
}

export function mockUseContext(): SinonStub {
  return sinon.stub(React, 'useContext')
}

export function mockUseEffect(): SinonStub {
  return sinon.stub(React, 'useEffect')
}

export function mockUseImperativeHandle(): SinonStub {
  return sinon.stub(React, 'useImperativeHandle')
}

export function mockPromiseUseEffect(n = 0) {
  const useEffectMock = sinon.stub(React, 'useEffect')
  return new Promise<UseEffectResponse>(function (resolve) {
    useEffectMock
      .onCall(n)
      .callsFake(function (
        theUseEffect: Function,
        dependencies?: DependencyList
      ) {
        const cleanUp = theUseEffect() || noop
        resolve({
          cleanUp,
          dependencies: dependencies ?? [],
          useEffectMock
        })
      })
  })
}
