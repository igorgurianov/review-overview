import { List, ListItem } from '@mui/material'
import { useEffect, useState } from 'react'
import fetchFeedData from '../api/mockFeedData'
import ReviewCard, { TReview } from './ReviewCard'
import ReviewCardSkeleton from './ReviewCardSkeleton'

function ReviewsFeed() {
  const [reviews, setReviews] = useState<TReview[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    const loadData = async () => {
      const data = await fetchFeedData()
      setReviews(data)
      setIsLoading(false)
    }

    loadData()
  }, [])

  return (
    <List>
      {(isLoading ? Array.from(new Array(10)) : reviews).map((item, index) =>
        item ? (
          <ListItem key={`${index + item.id}`}>
            <ReviewCard
              id={item.id}
              name={item.name}
              rating={item.rating}
              date={item.date}
              text={item.text}
            />
          </ListItem>
        ) : (
          <ReviewCardSkeleton key={index} />
        ),
      )}
    </List>
  )
}

export default ReviewsFeed
