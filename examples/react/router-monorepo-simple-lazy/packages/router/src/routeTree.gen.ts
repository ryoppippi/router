/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as PostIdRouteImport } from './routes/$postId'
import { Route as IndexRouteImport } from './routes/index'

const PostIdRoute = PostIdRouteImport.update({
  id: '/$postId',
  path: '/$postId',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/$postId': typeof PostIdRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/$postId': typeof PostIdRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/$postId': typeof PostIdRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/$postId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/$postId'
  id: '__root__' | '/' | '/$postId'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PostIdRoute: typeof PostIdRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/$postId': {
      id: '/$postId'
      path: '/$postId'
      fullPath: '/$postId'
      preLoaderRoute: typeof PostIdRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PostIdRoute: PostIdRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
