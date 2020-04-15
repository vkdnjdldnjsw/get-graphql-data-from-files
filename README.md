# get-graphql-data-from-files

Use this module to separate files related to graphql

# Install
  ```
  npm install get-graphql-data-from-files
  ```

# Providing
>## getGraphqlsFromFile(dir, filter)
>>This function returns the DocumentNode(= typeDefs) by reading *.graphql files while traversing the 'dir'.
>>* dir : String representing the folder containing the *.graphql files
>>* filter(option) : Function that has the fileName parameter and return the boolean.

>## getResolversFromFile(dir, filter)
>>This function returns the IResolvers(= resolvers) by reading *.resolvers.* files while traversing the 'dir'.
>>* dir : String representing the folder containing the *.resolvers.* files
>>* filter(option) : Function that has the fileName parameter and return the boolean.
***
# Example
You can use this module with graphql-tools(actually recommend)

  ```js
  import { getGraphqlsFromFile, getResolversFromFile } from 'get-graphql-data-from-files'
  import { addSchemaLevelResolveFunction } from 'graphql-tools'
  
  const path = '/src/graphql/'
  const typeDefs = getGraphqlsFromFile(path)
  const resolvers = getResolversFromFile(path, , (fileName)=> {
    const splitedFileName = fileName.split('.')
    if (splitedFileName[0] === 'exclude') {
      return true
    }
    return false
  })

  const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
  })
  ```
