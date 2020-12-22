import { RouteComponentProps } from 'react-router-dom'
import { connect } from '../../connect'
import { RootStore } from '../../Store'
import { RewardDetailsPage } from './pages'

const mapStoreToProps = (store: RootStore, props: RouteComponentProps<{ id: string }>): any => ({
  loadReward: store.rewards.loadAndTrackReward,
  rewardViewed: store.analytics.trackRewardView,
  authenticated: store.auth.isAuthenticated,
  rewardId: props.match.params.id,
  currentBalance: store.balance.currentBalance,
  reward: store.rewards.getReward(props.match.params.id),
  onBack: store.routing.goBack,
  onRedeem: store.rewards.redeemReward,
  isInCart: store.rewards.isInChoppingCart(props.match.params.id),
  onAddToCart: store.rewards.addToChoppingCart,
  onRemoveFromCart: store.rewards.removeFromChoppingCart,
  hasMinecraftUsername: store.profile.currentProfile?.minefraftUsername !== undefined,
  onFurtherActionRequired: () =>
    store.notifications.sendNotification({
      title: 'You need a Minecraft Username to redeem this reward.',
      message: 'Go to your account page to add your Minecraft Username.',
      autoClose: false,
      onClick: () => store.routing.push('/settings/summary'),
      type: 'error',
    }),
})

export const RewardDetailsContainer = connect(mapStoreToProps, RewardDetailsPage)
