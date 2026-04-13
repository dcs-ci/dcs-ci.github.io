import { ConferenceLayout } from "@/components/layout/ConferenceLayout";
import { Users, Award, BookOpen, MessageSquare } from "lucide-react";

const OrganizationPage = () => {
  return (
    <ConferenceLayout>
      {/* Page header */}
      <div className="border-b bg-card">
        <div className="section-container">
          <h1 className="text-foreground">Organization</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            The conference is organised by an international team of researchers and practitioners
            with expertise in critical infrastructure security.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="section-container">
        {/* General Chairs */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <Award className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">General Chair</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Jianying Zhou",
                affiliation: "SUTD, Singapore",
                image: "/Jianying Zhou (SUTD, Singapore).jpg"
              },
            ].map((chair) => (
              <div key={chair.name} className="conference-card flex flex-col items-center text-center">
                <img
                  src={chair.image}
                  alt={chair.name}
                  className="mb-4 h-24 w-24 rounded-full object-cover object-top border-2 border-muted"
                />
                <h3 className="mb-1 font-semibold text-foreground">{chair.name}</h3>
                <p className="text-sm text-muted-foreground">{chair.affiliation}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Program Chairs */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <BookOpen className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Program Chairs</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Saman Zonouz",
                affiliation: "Georgia Tech, USA",
                image: "/Saman Zonouz (GaTech, USA).webp"
              },
              {
                name: "Daisuke Mashima",
                affiliation: "SUTD, Singapore",
                image: "/Daisuke Mashima (SUTD, Singapore) .jpg"
              },
            ].map((chair) => (
              <div key={chair.name} className="conference-card flex flex-col items-center text-center">
                <img
                  src={chair.image}
                  alt={chair.name}
                  className="mb-4 h-24 w-24 rounded-full object-cover object-top border-2 border-muted"
                />
                <h3 className="mb-1 font-semibold text-foreground">{chair.name}</h3>
                <p className="text-sm text-muted-foreground">{chair.affiliation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industrial Track Chair */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <Award className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Industrial Track Chair</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Melissa Meeker",
                affiliation: "The Water Tower, USA",
                image: "/Melissa Meeker (TWT, USA).jpeg"
              },
            ].map((chair) => (
              <div key={chair.name} className="conference-card flex flex-col items-center text-center">
                <img
                  src={chair.image}
                  alt={chair.name}
                  className="mb-4 h-24 w-24 rounded-full object-cover object-top border-2 border-muted"
                />
                <h3 className="mb-1 font-semibold text-foreground">{chair.name}</h3>
                <p className="text-sm text-muted-foreground">{chair.affiliation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Training & Demo Chair */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <Award className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Training & Demo Chair</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Aditya Mathur",
                affiliation: "SUTD, Singapore",
                image: "/Aditya Mathur (SUTD, Singapore).jpg"
              },
            ].map((chair) => (
              <div key={chair.name} className="conference-card flex flex-col items-center text-center">
                <img
                  src={chair.image}
                  alt={chair.name}
                  className="mb-4 h-24 w-24 rounded-full object-cover object-top border-2 border-muted"
                />
                <h3 className="mb-1 font-semibold text-foreground">{chair.name}</h3>
                <p className="text-sm text-muted-foreground">{chair.affiliation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Organizing Committee */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <Users className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Organizing Committee</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                role: "Organizing Chair",
                name: "Mark Goh",
                affiliation: "SUTD, Singapore",
                image: "/Mark Goh (SUTD, Singapore).png"
              },
              {
                role: "Publication Chair",
                name: "Awais Yousaf",
                affiliation: "SUTD, Singapore",
                image: "/Awais Yousaf (SUTD, Singapore).jpg"
              },
              {
                role: "Poster Chair",
                name: "Gauthama Raman",
                affiliation: "SUTD, Singapore",
                image: "/Gauthama Raman (SUTD, Singapore).jpg"
              },
              {
                role: "Publicity Chair",
                name: "Vanessa Lee",
                affiliation: "SUTD, Singapore",
                image: "/Vanessa Lee (SUTD, Singapore).jpg"
              },
              {
                role: "Publicity Chair",
                name: "Kristan VandenHeuvel",
                affiliation: "The Water Tower, USA",
                image: "/kristan-vandenheuvel.jpg"
              },
              {
                role: "Web Chair",
                name: "Nagarajan Sivanadipatham",
                affiliation: "SUTD, Singapore",
                image: "/Nagarajan Sivanadipatham (SUTD, Singapore).jpg"
              },
            ].map((chair) => (
              <div key={chair.name} className="conference-card flex flex-col items-center text-center">
                <img
                  src={chair.image}
                  alt={chair.name}
                  className="mb-4 h-24 w-24 rounded-full object-cover object-top border-2 border-muted"
                />
                <h3 className="mb-1 font-semibold text-foreground">{chair.name}</h3>
                <p className="text-sm font-medium text-primary">{chair.role}</p>
                <p className="text-sm text-muted-foreground">{chair.affiliation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Program Committee */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <Users className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Technical Program Committee</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Alex Stefanov", affiliation: "TU Delft, Netherlands" },
              { name: "Awais Rashid", affiliation: "University of Bristol, UK" },
              { name: "Binbin Chen", affiliation: "SUTD, Singapore" },
              { name: "Biplab Sikdar", affiliation: "NUS, Singapore" },
              { name: "Chaudhry Mujeeb Ahmed", affiliation: "Newcastle University, UK" },
              { name: "Cristina Alcaraz", affiliation: "University of Malaga, Spain" },
              { name: "Daniel Xiapu Luo", affiliation: "The Hong Kong Polytechnic University, HK" },
              { name: "Daniele Antonioli", affiliation: "EURECOM, France" },
              { name: "David Yau", affiliation: "SUTD, Singapore" },
              { name: "Dongyan Xu", affiliation: "Purdue University, USA" },
              { name: "Dieter Gollmann", affiliation: "TU Hamburg, Germany" },
              { name: "Eunsuk Kang", affiliation: "Carnegie Mellon University, USA" },
              { name: "Hongxin Hu", affiliation: "University at Buffalo, USA" },
              { name: "Irfan Ahmed", affiliation: "Virginia Commonwealth University, USA" },
              { name: "Jun Sun", affiliation: "SMU, Singapore" },
              { name: "Katsunari Yoshioka", affiliation: "Yokohama National University, Japan" },
              { name: "Michail (Mihalis) Maniatakos", affiliation: "NYU Abu Dhabi, UAE" },
              { name: "Mohammad Ashiqur Rahman", affiliation: "Florida International University, USA" },
              { name: "Rui Tan", affiliation: "NTU, Singapore" },
              { name: "Ruilong Deng", affiliation: "Zhejiang University, China" },
              { name: "Sokratis Katsikas", affiliation: "NTNU, Norway" },
              { name: "Sudipta Chattopadhyay", affiliation: "University of Missouri-Kansas City (UMKC), USA" },
              { name: "Surya Nepal", affiliation: "Data61, Australia" },
            ].map((member, i) => (
              <div key={i} className="conference-card flex flex-col items-center text-center justify-center">
                <h3 className="mb-1 font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.affiliation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advisory Board */}
        {/* <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <MessageSquare className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Advisory Board</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="conference-card">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">To Be Announced</h3>
                <p className="text-sm text-muted-foreground">Affiliation</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* Note */}
        <div className="rounded-lg border bg-muted/50 p-6">
          <p className="text-center text-muted-foreground">
            Committee details will be updated as confirmations are received.
            Check back for announcements or subscribe to our mailing list for updates.
          </p>
        </div>
      </div>
    </ConferenceLayout>
  );
};

export default OrganizationPage;
