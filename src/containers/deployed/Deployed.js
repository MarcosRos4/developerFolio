import React, {useContext, Suspense, lazy} from "react";
import "./Deployed.scss";
import {openSource} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";


const sites = [
  { id: 1, name: 'The Bear Bar', url: 'https://projeto-springboot-pi.vercel.app/', image: 'https://pbs.twimg.com/media/GZylqLYW4AA39zC?format=jpg&name=small' },
  { id: 2, name: 'TrueDamage', url: 'https://truedamage-818252144685.southamerica-east1.run.app/', image: "https://pbs.twimg.com/media/GZymNqPW0AAJlIG?format=jpg&name=small" },
  { id: 3, name: 'Pendulo Duplo', url: 'https://replit.com/@MarcosRos4/PenduloDuplo', image: "https://pbs.twimg.com/media/GZypbXwXUAA5GZo?format=jpg&name=small" },
  
  

  // Adicione mais sites conforme necessário
];


export default function Deployed() {
  const DeployedCard = lazy(() =>
    import("../../components/deployedCard/DeployedCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);

  if (
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Showcase de Projetos</h1>
          <div className="repo-cards-div-main">
            {sites.map(site => (
                <DeployedCard key={site.id} site={site} isDark={isDark} />
            ))}
          </div>
          
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
