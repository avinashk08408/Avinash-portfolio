/** Quiet Scholar React application shell. */
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
