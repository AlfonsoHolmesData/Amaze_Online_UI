package post_map;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.HashMap;
import java.util.Map;

public class PostMapHandler implements RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent> {
    private Gson mapper = new GsonBuilder().setPrettyPrinting().create();
    private final UserRepository userRepo;
    private final MapRepository mapRepo;

    public PostMapHandler() {
        this.userRepo = new UserRepository();
        this.mapRepo = new MapRepository();
    }
    public PostMapHandler(UserRepository userRepo, MapRepository mapRepo) {
        this.userRepo = userRepo;
        this.mapRepo = mapRepo;
    }

    @Override
    public APIGatewayProxyResponseEvent handleRequest(APIGatewayProxyRequestEvent request, Context context) {
        LambdaLogger logger = context.getLogger();
        APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent();

        Map<String, String> headers = new HashMap<>();
        headers.put("Content-Type", "application/json");
        headers.put("Access-Control-Allow-Headers", "Content-Type,X-Amz-Date,Authorization");
        headers.put("Access-Control-Allow-Origin", "*");
        response.setHeaders(headers);

        post_map.Map newMap = null;
        try{
            newMap = mapper.fromJson( request.getBody(),  post_map.Map.class );
            logger.log("CONVERTED USER AFTER GSON MAPPER: " + newMap + " : RECORDED BY LAMBDA LOGGER \n");
            mapRepo.saveMap(newMap);
            response.setBody(mapper.toJson(newMap));
            response.setStatusCode(200);
        }catch(Exception e) {
            response.setStatusCode(500);
            logger.log("ERROR MESSAGE FROM LINE 40: " + e.getMessage() + " : RECORDED BY LAMBDA LOGGER \n");
            logger.log("USER AFTER EXECPTION: " + mapper.toJson(newMap) + " : RECORDED BY LAMBDA LOGGER \n");
            logger.log("USER AFTER 500 EXECPTION: " + mapper.toJson(newMap) + " : RECORDED BY LAMBDA LOGGER \n");
        }
        return response;
    }
}
