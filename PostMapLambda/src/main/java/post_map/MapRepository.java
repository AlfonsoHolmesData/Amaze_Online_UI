package post_map;

import software.amazon.awssdk.enhanced.dynamodb.DynamoDbEnhancedClient;
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbTable;
import software.amazon.awssdk.enhanced.dynamodb.TableSchema;
import software.amazon.awssdk.http.apache.ApacheHttpClient;
import software.amazon.awssdk.services.dynamodb.DynamoDbClient;

import java.util.UUID;
import java.util.stream.Collectors;

public class MapRepository {
    private final DynamoDbTable<Map> mapTable;
    public MapRepository(){
        // create client
        DynamoDbClient db = DynamoDbClient.builder().httpClient(ApacheHttpClient.create()).build();
        // create enhanced client
        DynamoDbEnhancedClient dbClient = DynamoDbEnhancedClient.builder().dynamoDbClient(db).build();
        // specify target table
        mapTable = dbClient.table("GameMaps", TableSchema.fromBean(Map.class));
    }

    public void saveMap(  Map mapToSave ){
        System.out.println("FROM USER REPOSITORY : "  + mapToSave.toString());
        // check if list cannot be found
        if( mapToSave == null ){ throw new RuntimeException("Null List"); }

        UUID uuid = UUID.randomUUID();
        mapToSave.setId(uuid.toString());
        mapTable.putItem(mapToSave);
    }

}
