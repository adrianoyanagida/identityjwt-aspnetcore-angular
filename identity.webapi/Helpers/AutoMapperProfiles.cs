using AutoMapper;
using identity.webapi.Data.Models.DTOs.IdentityDTOs;
using identity.webapi.Data.Models.Identity;

namespace identity.webapi.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<User, UserLoginDto>().ReverseMap();
        }
    }
}