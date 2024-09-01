import NavHeader from "./NavHeader";
import { Sidenav } from "./Sidenav";

const LayoutWrapper = async ({
  children,
}: {
  children: React.ReactNode | React.ReactElement;
}) => {
  return (
    <section className="flex h-screen w-full overflow-hidden bg-gray-100">
      <Sidenav />
      <main className="w-full relative overflow-y-auto">
        <NavHeader />
        <div className="w-11/12 mx-auto mt-10 ">{children}</div>
      </main>
    </section>
  );
};

export default LayoutWrapper;
