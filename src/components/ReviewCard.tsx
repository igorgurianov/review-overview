import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from '@mui/material'

export type TReview = {
  name: string
  text: string
  date: string
  id: number
  rating: number
}

function ReviewCard({ name, text, date, rating }: TReview) {
  return (
    <Card sx={{ width: 1 }}>
      <CardHeader
        avatar={<Avatar>{name[0]}</Avatar>}
        title={name}
        subheader={date}
      />
      <CardContent sx={{ pt: 0 }}>
        <Rating name="read-only" value={rating} size="small" />
        <Typography>{text}</Typography>
      </CardContent>
    </Card>
  )
}

export default ReviewCard
