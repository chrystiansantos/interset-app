import { Loading } from '@/src/components/loading'
import { Card } from '@/src/components/products/card'
import { Header } from '@/src/components/products/header'
import { TextFilter } from '@/src/components/products/text-filter'
import { FlatList, SafeAreaView, View } from 'react-native'
import { useProducts } from './use-products'

export default function Products() {
  const {
    categories,
    selectCategory,
    handleSelectCategory,
    categoryLoading,
    productLoading,
    products,
  } = useProducts()

  return (
    <SafeAreaView className="mx-4 mt-20 flex-1 px-8">
      <Header />
      <View className="mt-8">
        <FlatList
          data={categories}
          renderItem={({ item: category }) => (
            <TextFilter
              category={category}
              categorySelected={selectCategory}
              selectCategory={handleSelectCategory}
            />
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          horizontal
        />
      </View>
      <View className="mt-8 flex-1">
        {categoryLoading || productLoading ? (
          <Loading />
        ) : (
          <FlatList
            className="mx-4 mb-10 pb-10"
            data={products}
            columnWrapperStyle={{
              alignItems: 'center',
              justifyContent: 'space-around',
              gap: 10,
              marginBottom: 20,
            }}
            renderItem={({ item }) => (
              <Card
                item={{
                  id: item.id.toString(),
                  title: item.title,
                  image: item.image,
                  price: item.price,
                }}
              />
            )}
            numColumns={2}
            keyExtractor={({ id }) => id.toString()}
            ItemSeparatorComponent={() => <View className="h-8" />}
          />
        )}
      </View>
    </SafeAreaView>
  )
}
