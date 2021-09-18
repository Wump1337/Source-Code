// Copyright 2021 - Present Xonia, Inc.

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//    http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Add Link if we need it 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Pages
import Homepage from './pages/Home';
import Error from './pages/Error';
import Privacy from './pages/Privacypolicy';
import Terms from './pages/Termsandconditions'
import Developers from "./pages/Developers";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/privacy">
          <Privacy />
        </Route>

       <Route path="/terms">
          <Terms />
        </Route> 

        <Route path="/developers/portal">
          <Developers />
        </Route> 

        <Route path="*">
          <Error />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;

// Made with Love by Aelpxy