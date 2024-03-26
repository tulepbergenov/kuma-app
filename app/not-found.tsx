import { NotFoundView } from "@/_views";
import { Metadata } from "next";
import { _notFoundMetadata } from "./_meta";

export const metadata: Metadata = _notFoundMetadata;

const NotFound = () => <NotFoundView />;

export default NotFound;
