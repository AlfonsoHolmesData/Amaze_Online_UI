package post_map;

import lombok.Data;

@Data
public class Sticker {
    int x;
    int y;
    String image;
    int width_percentage;
    int height_percentage;
    String position_type;
    boolean visited;

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getWidth_percentage() {
        return width_percentage;
    }

    public void setWidth_percentage(int width_percentage) {
        this.width_percentage = width_percentage;
    }

    public int getHeight_percentage() {
        return height_percentage;
    }

    public void setHeight_percentage(int height_percentage) {
        this.height_percentage = height_percentage;
    }

    public String getPosition_type() {
        return position_type;
    }

    public void setPosition_type(String position_type) {
        this.position_type = position_type;
    }

    public boolean isVisited() {
        return visited;
    }

    public void setVisited(boolean visited) {
        this.visited = visited;
    }
}
