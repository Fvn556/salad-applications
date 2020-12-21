import { storiesOf } from '@storybook/react'
import React from 'react'
import { EditUsername } from './EditUsername'

storiesOf('Modules/Account/AccountViews/components/EditUsername', module).add('default', () => {
  const profile = {
    email: 'SCOTT@SALAD.IO',
    id: '1e1e1e1e-e3e3-f333-c123-000000000000',
    lastSeenApplicationVersion: '2020-12-10',
    username: 'SCOTT',
    viewedReferralOnboarding: false,
  }
  return (
    <div style={{ backgroundColor: '#0A2133' }}>
      <EditUsername profile={profile} />
    </div>
  )
})
