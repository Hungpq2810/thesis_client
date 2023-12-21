import { activityService } from '@/services/activity.service'
import { Avatar, Badge, Button, Card } from 'antd'
import { log } from 'console'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { useQuery } from 'react-query'
const { Meta } = Card

const ActivityPage = () => {
  const router = useRouter()
  const { data: dataActivity, refetch } = useQuery(['listActivity'], () => activityService.getAllActivity())
  return (
    <React.Fragment>
      <Head>
        <title>Danh sách hoạt động</title>
        <meta name='description' content='Danh sách hoạt động' />
        <meta name='keywords' content='Activity Management' />
      </Head>
      <h1 className='flex flex-col justify-center items-center gap-10 mb-24 text-6xl leading-8 text-bold text-[#0F147F]'>
        Danh sách hoạt động
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
        {dataActivity &&
          dataActivity.data &&
          dataActivity.data.data.activities.map(item => (
            <Card key={item.id} style={{ width: 400 }} cover={<img alt='example' src={item.image} />}>
              <Meta
                avatar={<Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />}
                title={item.name}
                description={
                  <div className='flex justify-between items-center'>
                    <pre>Người tạo hoạt động: {item.creator}
                    <br />
                    {item.description}
                    </pre>
                    <Button onClick={() => router.push(`/activity/${item.id}`)}>Xem chi tiết</Button>
                  </div>
                }
              />
            </Card>
          ))}
      </div>
    </React.Fragment>
  )
}

export default ActivityPage
