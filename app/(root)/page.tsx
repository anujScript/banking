import HeaderBox from "@/components/HeaderBox";
import TotalBalanceaBox from "@/components/TotalBalanceaBox";
import RightSideBar from "@/components/RightSideBar";
const Home = () => {
  const loggedIn = { firstName: "Anuj", lastName: "Jain", email: "a@a.com" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || "User"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceaBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={99.1}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 109.1 }, { currentBalance: 1000.5 }]}
      />
    </section>
  );
};

export default Home;
