import { Pressable, StyleSheet } from "react-native";
import Text from './Text';
import theme from "../theme";

const styles = StyleSheet.create({
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  text: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBarTab = ({ tab, to }) => {
  return (
    <Link to={to} component={Pressable} style={styles.tab}>
      <Text style={styles.text}>{tab}</Text>
    </Link>
  );
};

export default AppBarTab;