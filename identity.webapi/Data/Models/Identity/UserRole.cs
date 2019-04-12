using Microsoft.AspNetCore.Identity;

namespace identity.webapi.Data.Models.Identity
{
    public class UserRole : IdentityUserRole<int>
    {
        public User User { get; set; }
        public Role Role { get; set; }
    }
}