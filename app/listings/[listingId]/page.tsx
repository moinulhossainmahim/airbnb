import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById"
import Listing from "./Listing";
import getReservations from "@/app/actions/getReservations";

interface IParams {
  listingId?: string;
}

const page = async (
  { params }: { params: IParams }
) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();
  const reservations = await getReservations(params);

  return (
    <Listing
      currentUser={currentUser}
      listing={listing}
      reservations={reservations}
    />
  )
}

export default page
