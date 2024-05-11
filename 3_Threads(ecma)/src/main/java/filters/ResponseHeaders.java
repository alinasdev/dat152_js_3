package filters;

import java.io.IOException;
import java.util.Enumeration;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletResponse;

public class ResponseHeaders implements Filter {

	private FilterConfig config;

	@Override
	public void init(FilterConfig config) throws ServletException {
		this.config = config;
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletResponse httpResp = (HttpServletResponse) response;
		Enumeration<String> e = config.getInitParameterNames();

		while (e.hasMoreElements()) {
			String name = (String) e.nextElement();
			String value = config.getInitParameter(name);
			httpResp.addHeader(name, value);
		}

		chain.doFilter(request, response);
	}
}
