import { SET_USERINFO } from '../../mutationTypes'
export default {
    [SET_USERINFO] (sate, {
        name,
        portrait
    }) {
        name && (sate.name = name)
        portrait && (sate.portrait = portrait)
    }
}
