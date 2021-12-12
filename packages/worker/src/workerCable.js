import {initActioncableAPI} from './cables/actioncable'
import {initAnycableAPI} from './cables/anycable'

export const loadCableApiWrapper = (cableType = 'actioncable', cableLibrary = null) => {
  if (!cableLibrary) {
    throw ('cableLibrary cannot be null')
  }

  switch (cableType?.toLowerCase()) {
    case 'actioncable': {
      return initActioncableAPI(cableLibrary)
    }
    case 'anycable': {
      return initAnycableAPI(cableLibrary)
    }
    default: {
      throw (`${cableType} is not actioncable or anycable type`)
    }
  }
}
