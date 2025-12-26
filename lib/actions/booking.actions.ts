import connectDB from '@/lib/mongodb';
import Booking from '@/database/booking.model';

export const createBooking = async ({
  eventId,
  slug,
  email,
}: {
  eventId: string;
  slug: string;
  email: string;
}) => {
  try {
    await connectDB();
    const booking = (await Booking.create({ eventId, slug, email })).lean();

    return { success: true, booking };
  } catch (error) {
    console.error('Booking creation failed:', error);
    return { success: false, message: 'Booking creation failed.' };
  }
};
