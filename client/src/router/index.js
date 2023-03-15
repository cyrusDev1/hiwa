import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MyStoriesView from '../views/MyStoriesView.vue';
import PostStoryView from '../views/PostStoryView.vue';
import AboutView from '../views/AboutView.vue';
import StoryView from '../views/StoryView.vue';
import CommentsView from '../views/CommentsView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/my-stories',
      name: 'my-stories',
      component: MyStoriesView
    },
    {
      path: '/post-story',
      name: 'post-story',
      component: PostStoryView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/story',
      name: 'story',
      component: StoryView
    },
    {
      path: '/comments',
      name: 'comments',
      component: CommentsView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
});

export default router;
