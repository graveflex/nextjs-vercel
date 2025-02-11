import type { Admin, User } from '@mono/types/payload-types';
import type { Access, FieldAccess } from 'payload';

export const isLoggedIn: Access<Admin> = ({ req: { user } }) => {
  // Return true if user is logged in, false if not
  return Boolean(user);
};

export const isAdmin: Access<Admin> = ({ req: { user } }) => {
  // Return true or false based on if the user has an admin role
  return Boolean(user?.roles?.includes('admin'));
};

export const isAdminOrSelf: Access = ({ req: { user } }) => {
  // Need to be logged in
  if (user) {
    // If user has role of 'admin'
    if (user.roles?.includes('admin')) {
      return true;
    }

    // If any other type of user, only provide access to themselves
    return {
      id: {
        equals: user.id
      }
    };
  }

  // Reject everyone else
  return false;
};

export const isAdminFieldLevel: FieldAccess<{ id: string }, User> = ({
  req: { user }
}) => {
  // Return true or false based on if the user has an admin role
  return Boolean(user?.roles?.includes('admin'));
};

// Commented out since we aren't using this yet;
// export const isAdminOrHasSiteAccessOrPublished: Access<User> = ({
//   req: { user }
// }) => {
//   // Need to be logged in
//   if (user) {
//     // If user has role of 'admin'
//     if (user?.roles?.includes('admin')) return true;

//     // If user has role of 'editor' and has access to a site,
//     // return a query constraint to restrict the documents this user can edit
//     // to only those that are assigned to a site, or have no site assigned
//     if (user.roles.includes('editor') && user.sites?.length > 0) {
//       return {
//         or: [
//           {
//             site: {
//               in: user.sites
//             }
//           },
//           {
//             site: {
//               exists: false
//             }
//           }
//         ]
//       };
//     }
//   }

//   // Non-logged in users can only read published docs
//   return {
//     _status: {
//       equals: 'published'
//     }
//   };
// };
// export const isAdminOrHasSiteAccess = (siteIDFieldName: string = 'site'): Access =>
//   ({ req: { user } }) => {
//     // Need to be logged in
//     if (user) {
//       // If user has role of 'admin'
//       if (user.roles.includes('admin')) return true;

//       // If user has role of 'editor' and has access to a site,
//       // return a query constraint to restrict the documents this user can edit
//       // to only those that are assigned to a site, or have no site assigned
//       if (user.roles.includes('editor') && user.sites?.length > 0) {
//         // Otherwise, we can restrict it based on the `site` field
//         return {
//           or: [
//             {
//               [siteIDFieldName]: {
//                 in: user.sites
//               }
//             },
//             {
//               [siteIDFieldName]: {
//                 exists: false
//               }
//             }
//           ]
//         };
//       }
//     }

//     // Reject everyone else
//     return false;
//   };
