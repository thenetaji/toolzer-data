# Toolzer Data

## Tool list data and blog required for toolzer during build.

### Uses cloudflare workers under the hood to send API like response to the frontend for efficient build. 

- Structure :
- `blog` hold all the blog files
- `content` has the content which is rendered for each tool, about the tool for specific
  - each category of tool has its specific folder and each category can further have their specific category
    - `pdf`
    - `image` image.json will contain all the category of image json specific json files
  