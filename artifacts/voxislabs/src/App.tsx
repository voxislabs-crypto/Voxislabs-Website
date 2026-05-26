import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import VoxisPage from "@/pages/platforms/VoxisPage";
import MerlinPage from "@/pages/platforms/MerlinPage";
import CouncilPage from "@/pages/platforms/CouncilPage";
import DreamtalesPage from "@/pages/platforms/DreamtalesPage";
import TrustwavePage from "@/pages/platforms/TrustwavePage";
import ContractSecurePage from "@/pages/platforms/ContractSecurePage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/platforms/voxis" component={VoxisPage} />
      <Route path="/platforms/merlin" component={MerlinPage} />
      <Route path="/platforms/council" component={CouncilPage} />
      <Route path="/platforms/dreamtales" component={DreamtalesPage} />
      <Route path="/platforms/trustwave" component={TrustwavePage} />
      <Route path="/platforms/contract-secure" component={ContractSecurePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
