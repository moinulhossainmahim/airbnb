import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import { SafeListing } from "./types";

interface HomeProps {
  searchParams: IListingsParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const listings = await getListings(searchParams);
  const currrentUser = await getCurrentUser();

  if (!listings.length) {
    return <EmptyState showReset />
  }

  return (
    <Container>
      <div
        className="
          pt-24
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {listings.map((listing: SafeListing) => (
          <ListingCard
            currentUser={currrentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  )
}
