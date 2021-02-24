# E-commerce App
> Based on Brad Traversy's [MERN eCommerce From Scratch](https://www.udemy.com/course/mern-ecommerce) course.

Read more about app's features & usage in my [fork of the original repo](https://github.com/agt-ru/proshop_mern).

Go see it live at: https://agt-ru-e-shop-app.herokuapp.com

## My additional changes:
- fix: on order edit, don't show deleted user's name/email
- early return next() in mongoose middleware
- security fix: order is seen only by its user or admin
- security fix: only admins are allowed to upload images
- fix: admins cannot delete themselves or edit their profile to non-admin
- fix: navbar username update after changing it in the admin panel
- clear search bar when navigating the site
- fix whitespace trim on search
- show product review immediately after posting

![screenshot](https://github.com/agt-ru/e-shop/blob/master/uploads/Screenshot.jpg)
