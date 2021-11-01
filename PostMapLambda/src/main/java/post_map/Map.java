package post_map;

import lombok.Data;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbAttribute;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbPartitionKey;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbSortKey;

import java.util.List;

@Data

public class Map {
    String id;
    String creator;
    List<Sticker> blueprint;

    @DynamoDbPartitionKey
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @DynamoDbSortKey
    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }
 @DynamoDbAttribute("blueprint")
    public List<Sticker> getBlueprint() {
        return blueprint;
    }

    public void setBlueprint(List<Sticker> blueprint) {
        this.blueprint = blueprint;
    }

    @Override
    public String toString() {
        return "Map{" +
                "id='" + id + '\'' +
                ", creator='" + creator + '\'' +
                ", blueprint=" + blueprint +
                '}';
    }
}
