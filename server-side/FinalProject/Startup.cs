using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmailService;
using FinalProject.BL;
using FinalProject.DL;
using FinalProject.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace FinalProject
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }


 
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddScoped(typeof(IUsersBl), typeof(UsersBl));
            services.AddScoped(typeof(IUsersDl), typeof(UsersDl));
            services.AddScoped(typeof(IBooksOrdersBl), typeof(BooksOrdersBl));
            services.AddScoped(typeof(IBooksOrdersDl), typeof(BooksOrdersDl));
            services.AddScoped(typeof(IMovieCloseBl), typeof(MovieCloseBl));
            services.AddScoped(typeof(IMovieCloseDl), typeof(MovieCloseDl));
            services.AddScoped(typeof(IMovieOpenBl), typeof(MovieOpenBl));
            services.AddScoped(typeof(IMovieOpenDl), typeof(MovieOpenDl));
            services.AddScoped(typeof(IMoviePeriodBl), typeof(MoviePeriodBl));
            services.AddScoped(typeof(IMoviePeriodDl), typeof(MoviePeriodDl));
            services.AddScoped(typeof(IMoviePaymentBl), typeof(MoviePaymentBl));
            services.AddScoped(typeof(IMoviePaymentDl), typeof(MoviePaymentDl));
            services.AddScoped(typeof(IFilmsBl), typeof(FilmsBl));
            services.AddScoped(typeof(IFilmsDl), typeof(FilmsDl));
            services.AddScoped(typeof(IContactsBl), typeof(ContactsBl));
            services.AddScoped(typeof(IContactsDl), typeof(ContactsDl));
            services.AddScoped(typeof(ICitiesBl), typeof(CitiesBl));
            services.AddScoped(typeof(ICitiesDl), typeof(CitiesDl));

            services.AddDbContext<FinalProjectContext>(options => options.UseSqlServer
              (Configuration.GetConnectionString("MySiteDB")));
            services.AddSwaggerGen(c => { c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "My API", Version = "v1" }); });
            services.AddControllers().AddJsonOptions(opts => opts.JsonSerializerOptions.PropertyNamingPolicy = null);
            services.AddScoped<IEmailSender, EmailSender>();
            var emailConfig = Configuration
            .GetSection("EmailConfiguration")
            .Get<EmailConfiguration>();
            services.AddSingleton(emailConfig);
            services.AddControllers();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseErrorHandlingMiddleware();
            app.UseHttpsRedirection();

            app.UseRouting(); app.UseCors(builder =>
            {
                builder.WithOrigins("https://localhost:44329")
                       .AllowCredentials()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            });

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            app.UseSwagger();
            app.UseSwaggerUI(c => { 
                c.SwaggerEndpoint("/webapi/swagger/v1/swagger.json", "My API V1"); 
            });
        }
    }
}
