package cz.fi.muni.pa165.sampleData;

import cz.fi.muni.pa165.PersistenceApplicationContext;
import cz.fi.muni.pa165.dao.UserRoleDao;
import cz.fi.muni.pa165.entity.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.test.context.ContextConfiguration;

@Service
@ContextConfiguration(classes = PersistenceApplicationContext.class)
public class UserRoleSampleData {
    @Autowired
    private UserRoleDao userRoleDao;

    private UserRole user;

    private UserRole admin;

    public UserRole getUser() {
        if (this.user == null) {
            UserRole user = new UserRole();
            user.setRoleName(UserRole.USER_ROLE_NAME);
            userRoleDao.create(user);
        }
        return user;
    }

    public void setUser(UserRole user) {
        this.user = user;
    }

    public UserRole getAdmin() {
        if (this.user == null) {
            UserRole admin = new UserRole();
            admin.setRoleName(UserRole.ADMINISTRATOR_ROLE_NAME);
            userRoleDao.create(admin);
        }
        return admin;
    }

    public void setAdmin(UserRole admin) {
        this.admin = admin;
    }
}
