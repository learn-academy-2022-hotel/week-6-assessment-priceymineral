# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Purpose is to initialize a subclass of the ApplicationController parent class. This class will hold the methods to handle the client-side (CRUD) requests for the BlogPost model created for its corresponding database.
class BlogPostsController < ApplicationController
  def index
    # ---2) Purpose is to assign all the entries in the database to a variable called posts. The .all method pulls all the entries from the db is called on. index is the method called on a GET request when no id is provided in the URL path. 
    @posts = BlogPost.all
  end

  # ---3) Purpose is to retrieve (GET) a single record from a database. The GET route will direct to this method when an id is given in the path. The entry retrieved (by id, through the use of the params object) is assigned to a variable. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The new method returns a new object (CREATE) with the arguments given (or not given).  
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Create, as opposed to .new, will not only return an object but also save it to the database, but only after it has been validated by the blog_post_params under private. If the post is valid and successfully saved to the database, the client is redirected to the post view.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Purpose is to initialize and assign the variable "post" to the entry with the id primary key specified in the URL path. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) POST and PATCH requests will call on this (update) method to modify the entry with the specified id. If the info input by the user is valid, the entry will by updated with the new information given (included in the params object). 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) The purpose of this line of code is to send the user to the URL under the "blog_post" alias automatically, but only if the record was destroyed (DELETED) in the database successfully. 
      redirect_to blog_posts_path
    end
  end

  # ---9) The purpose of the keyword private is to be able to specify methods that will not be available outside of the class they're defined in. This increases the security in your application by helping prevent users from altering your codebase in undesired ways. 
  private
  def blog_post_params
    # ---10) The purpose of this line of code is to indicate which key in params is required to be present (in this case :blog_post), otherwise it will throw an error. .permit ensures that only the keys specified are allowed to be modified or included in the request, and if anything else is included it will throw an error. 
    params.require(:blog_post).permit(:title, :content)
  end
end
