import { MenuItem1, SupportLinksPage } from '../../components'
import { config } from '../../config'
import { connect } from '../../connect'
import { RootStore } from '../../Store'
import { SupportLinksContainer } from './link-views'

const mapStoreToProps = (store: RootStore): any => {
  const menuItems: MenuItem1[] = [
    {
      url: '/help/linklist',
      text: 'Support Links',
      component: SupportLinksContainer,
      desktopOnly: false,
    },
  ]

  return {
    onClose: () => store.ui.hideModal(),
    menuItems: menuItems,
    appVersion: store.native.desktopVersion,
    appBuild: config.appBuild,
    latestDesktop: store.version.onLatestDesktop,
    onDownloadLatestDesktop: store.version.downloadLatestDesktop,
  }
}

export const HelpMenuContainer = connect(mapStoreToProps, SupportLinksPage)
