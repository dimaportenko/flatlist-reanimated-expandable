import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { DataItemType, getData } from "./src/data";
import { ListItem } from "./src/ListItem";

export default function App() {
  const data = getData();
  console.log(data);

  const renderItem = ({ item }: ListRenderItemInfo<DataItemType>) => {
    return <ListItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${item.title}${index}`}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
