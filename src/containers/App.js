import React, { Component } from "react";
import CartList from "../components/CartList";
import { connect } from "react-redux";
import Search from "../components/Search";
import Scroll from "../components/Scroll";
import { setSearchField, requestRobots } from "../action";
import ErrorBoundary from "../components/ErrorBoundary";

//mapStateToProps
const mapStateToProps = state => {
  return {
    searchField: state.searchFieldReducer.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  onSearchChange: e => dispatch(setSearchField(e.target.value.trim())),
  onRequestRobots: () => dispatch(requestRobots)
});

// App Class
class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  // render
  render() {
    let { searchField, onSearchChange, robots, isPending } = this.props;
    const filterRobo = robots.filter(robo => {
      return robo.name.toLocaleLowerCase().includes(searchField.toLowerCase());
    });

    //jsx
    if (isPending) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="tc">
        <h1>Robo Friend App</h1>
        <Search searchChange={onSearchChange} searchField={searchField} />
        <Scroll>
          <ErrorBoundary>
            <CartList robots={filterRobo} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
