import { connect } from '../../../connect'
import { RootStore } from '../../../Store'
import { MinecraftUsername } from './components/MinecraftUsername'

const mapStoreToProps = (store: RootStore): any => {
  const username = store.profile.currentProfile?.minefraftUsername
  return {
    username: username,
    isUpdating: store.profile.isUpdating,
    onUpdateUsername: store.profile.updateMinecraftUsername,
  }
}

export const MinecraftUsernameContainer = connect(mapStoreToProps, MinecraftUsername)
