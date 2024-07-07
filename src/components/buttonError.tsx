import { Component, ReactNode } from 'react';

class ErrorButton extends Component {
  state = {
    isError: false,
  };

  componentDidUpdate(): void {
    if (this.state.isError) {
      throw new Error('Тут все сломалось');
    }
  }

  handleError = () => {
    this.setState({ isError: true });
  };

  render(): ReactNode {
    return <button onClick={this.handleError}>ERROR</button>;
  }
}

export default ErrorButton;
