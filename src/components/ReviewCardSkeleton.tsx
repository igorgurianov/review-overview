import { Box, Skeleton } from '@mui/material'

function ReviewCardSkeleton() {
  return (
    <Box sx={{ mt: 1 }}>
      <Skeleton variant="rectangular" height={170} />
    </Box>
  )
}

export default ReviewCardSkeleton
