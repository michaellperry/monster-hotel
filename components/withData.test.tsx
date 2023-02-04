import { withData, WithDataProps } from "./withData";
import { Text } from "react-native";

describe("withData", () => {
  it("should display a loading screen when data is undefined", () => {
    
    type WrappedProps = WithDataProps<string, unknown>;
    const WrappedComponent = ({ data }: WrappedProps) => <Text>{data}</Text>;
    
  });
});