using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace identity.webapi.Data.Models.Identity
{
    public class Role : IdentityRole<int>
    {
        public List<UserRole> UserRoles { get; set; }
    }
}